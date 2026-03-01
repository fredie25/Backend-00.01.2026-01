const DB_SISTEMA = {
    modelos: {
        "Oppo": ["Reno 11 5G", "A78", "Find N3 Flip"],
        "Apple": ["iPhone 15 Pro", "iPhone 14", "iPhone 13"],
        "Samsung": ["Galaxy S24 Ultra", "Galaxy A54"],
        "Xiaomi": ["Redmi Note 13", "Xiaomi 14"]
    },
    repuestos: [
        {nombre: "Pantalla Original", precio: 150},
        {nombre: "Batería Certificada", precio: 45},
        {nombre: "Módulo de Carga", precio: 30}
    ],
    tecnicos: [
        {nombre: "Carlos M.", skills: ["Apple", "Samsung"]},
        {nombre: "Ana R.", skills: ["Oppo", "Xiaomi"]},
        {nombre: "Luis T.", skills: ["Apple", "Samsung", "Oppo", "Xiaomi"]} // Master
    ]
};

let ticketActivo = { fase: 0, logs: [], equipo: null, repuestosCargados: [] };

function validarDigitos(input) { input.value = input.value.replace(/[^0-9]/g, ''); }

function cargarModelos() {
    const marca = document.getElementById('marca').value;
    const select = document.getElementById('modelo');
    select.innerHTML = DB_SISTEMA.modelos[marca].map(m => `<option value="${m}">${m.toUpperCase()}</option>`).join('');
    select.disabled = false;
}

function mostrarAlerta(mensaje) {
    document.getElementById('modal-msg').innerText = mensaje;
    document.getElementById('modal-alert').classList.remove('hidden');
}

function cerrarModal() { document.getElementById('modal-alert').classList.add('hidden'); }

function registrarLog(accion) {
    const hora = new Date().toLocaleTimeString();
    ticketActivo.logs.push({ hora, accion });
    document.getElementById('process-history').innerHTML = ticketActivo.logs.map(l => `
        <div class="timeline-item">
            <span style="color:var(--neon-pink); font-size: 0.7rem; font-weight:900;">${l.hora}</span><br>
            <span style="color: rgba(255,255,255,0.9);">${l.accion}</span>
        </div>
    `).reverse().join('');
}

document.getElementById('repair-form').onsubmit = function(e) {
    e.preventDefault();
    const imei = document.getElementById('imei').value;
    const serie = document.getElementById('serie').value;

    if (serie.length !== 10 || imei.length !== 15) {
        return mostrarAlerta("ERROR: El N° de Serie debe tener 10 dígitos y el IMEI 15 dígitos numéricos.");
    }

    ticketActivo.equipo = { marca: document.getElementById('marca').value, modelo: document.getElementById('modelo').value, imei, serie };
    registrarLog(`Ingreso validado (No reportado). Equipo: ${ticketActivo.equipo.marca} ${ticketActivo.equipo.modelo}.`);
    document.getElementById('section-ingreso').classList.add('hidden');
    document.getElementById('section-fases').classList.remove('hidden');
    actualizarEstacion();
};

function actualizarEstacion() {
    const area = document.getElementById('fase-dinamica');
    const barra = document.getElementById('main-progress');
    const btn = document.getElementById('btn-next');
    
    document.getElementById('status-display').innerHTML = `
        <h3 style="margin:0; font-size:1.1rem;">ESTACIÓN: ${ticketActivo.equipo.marca.toUpperCase()} ${ticketActivo.equipo.modelo.toUpperCase()}</h3>
        <p style="margin:5px 0 0 0; font-size:0.8rem; opacity:0.7;">S/N: ${ticketActivo.equipo.serie} | IMEI: ${ticketActivo.equipo.imei}</p>`;

    if (ticketActivo.fase === 0) {
        barra.style.width = "40%";
        area.innerHTML = `<label>1. REVISIÓN Y PRIMER DIAGNÓSTICO (OBLIGATORIO):</label>
                          <textarea id="diag-tecnico" placeholder="Describa la falla encontrada en la revisión inicial..."></textarea>`;
    } 
    else if (ticketActivo.fase === 1) {
        barra.style.width = "60%";
        area.innerHTML = `
            <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.1); border-radius:12px; padding:15px;">
                <label style="margin-bottom:15px; color:white;">REQUISITOS PARA ACCEDER AL SERVICIO:</label>
                <div class="checkbox-line"><input type="checkbox" id="check-auth"> <span>Autorización escrita del usuario firmada.</span></div>
                <div class="checkbox-line"><input type="checkbox" id="check-abono"> <span>Abono del 50% de la reparación realizado.</span></div>
            </div>`;
    } 
    else if (ticketActivo.fase === 2) {
        barra.style.width = "85%";
        // Filtrar técnicos por la habilidad (skill) requerida para esta marca
        const marcaActual = ticketActivo.equipo.marca;
        const tecnicosAptos = DB_SISTEMA.tecnicos.filter(t => t.skills.includes(marcaActual));
        
        area.innerHTML = `
            <label>TÉCNICO ASIGNADO (SKILL: ${marcaActual.toUpperCase()}):</label>
            <select id="tecnico-sel" style="margin-bottom:15px;">
                ${tecnicosAptos.map(t => `<option value="${t.nombre}">${t.nombre}</option>`).join('')}
            </select>
            
            <label>AGREGAR REPUESTOS A LA REPARACIÓN:</label>
            <div style="display:flex; gap:10px; margin-bottom:10px;">
                <select id="sel-rep" style="flex:1;">${DB_SISTEMA.repuestos.map((r, i) => `<option value="${i}">${r.nombre} ($${r.precio})</option>`).join('')}</select>
                <button onclick="addRepuesto()" class="btn-neon-blue" style="width:auto; padding:0 20px; margin-top:0;">+</button>
            </div>
            <div id="lista-r" style="background:rgba(0,0,0,0.2); padding:10px; border-radius:8px; min-height:50px; font-size:0.85rem;"></div>`;
    } 
    else {
        barra.style.width = "100%"; barra.classList.add('success');
        area.innerHTML = `<h2 style="color:var(--neon-green); text-align:center; margin:0;">✓ EQUIPO LISTO Y ENTREGADO</h2>`;
        btn.classList.add('hidden');
    }
}

function addRepuesto() {
    const idx = document.getElementById('sel-rep').value;
    const rep = DB_SISTEMA.repuestos[idx];
    ticketActivo.repuestosCargados.push(rep);
    registrarLog(`Repuesto agregado: ${rep.nombre} ($${rep.precio})`);
    
    document.getElementById('lista-r').innerHTML = ticketActivo.repuestosCargados.map(r => `• ${r.nombre} ($${r.precio})`).join('<br>');
}

function siguienteFase() {
    if (ticketActivo.fase === 0) {
        const d = document.getElementById('diag-tecnico').value;
        if (!d) return mostrarAlerta("Se debe guardar el primer diagnóstico de la revisión.");
        registrarLog("Primer diagnóstico guardado: " + d);
    } 
    else if (ticketActivo.fase === 1) {
        if (!document.getElementById('check-auth').checked || !document.getElementById('check-abono').checked) {
            return mostrarAlerta("Se requiere la autorización escrita y el abono del 50% para acceder al servicio de reparación.");
        }
        registrarLog("Autorización y pago de abono verificados.");
    }
    else if (ticketActivo.fase === 2) {
        const tecnico = document.getElementById('tecnico-sel').value;
        registrarLog(`Reparación finalizada por técnico: ${tecnico}.`);
    }

    ticketActivo.fase++;
    actualizarEstacion();
}


// profesor aqui tuve que  Simula Mongo ya que no pude conectar a  la base de datos, no me dejaba abrir otro cluster gratuito y el que tenia no se podia conectar 


let items = [];
let nextId = 1;

const Item = {
    // Crear un nuevo item
    create: async (data) => {
        const nuevoItem = {
            _id: (nextId++).toString(),
            nombre: data.nombre,
            descripcion: data.descripcion || '',
            fecha: data.fecha || new Date(),
            esCompletado: data.esCompletado || false
        };
        items.push(nuevoItem);
        return nuevoItem;
    },
    
    // Guardar un item para compatibilidad con .save()
    save: async function() {
        
        return this;
    },
    
    // Buscar items con filtro
    find: async (filtro = {}) => {
        let resultado = [...items];
        
        if (filtro.esCompletado !== undefined) {
            resultado = resultado.filter(i => i.esCompletado === filtro.esCompletado);
        }
        
        return resultado;
    },
    
    // Buscar un solo item
    findOne: async (filtro = {}) => {
        let resultado = items.find(i => {
            for (let key in filtro) {
                if (i[key] !== filtro[key]) return false;
            }
            return true;
        });
        return resultado || null;
    },
    
    // Buscar por ID
    findById: async (id) => {
        return items.find(i => i._id === id) || null;
    },
    
    // Buscar y actualizar
    findByIdAndUpdate: async (id, update, options = {}) => {
        const index = items.findIndex(i => i._id === id);
        if (index === -1) return null;
        
        items[index] = { ...items[index], ...update };
        
        if (options.new) {
            return items[index];
        }
        return items[index];
    },
    
    // Eliminar 
    findByIdAndDelete: async (id) => {
        const index = items.findIndex(i => i._id === id);
        if (index === -1) return null;
        
        const eliminado = items[index];
        items.splice(index, 1);
        return eliminado;
    },
    
    // Obtener  
    getAll: () => items,
    
    // Limpiar  
    clear: () => {
        items = [];
        nextId = 1;
    }
};

module.exports = Item;
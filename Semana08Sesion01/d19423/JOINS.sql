
select 
m.nombre as "Nombre Mascota",
CONCAT(p.nombres ,' ', p.apellidos) as "Propietario",
m.peso as "Peso (KG)",
e.descripcion as "Especie",
r.descripcion as "Raza",
c.descripcion as "Color",
s.descripcion as "Sexo",
u.username as "Usuario Creacion"
from tblMascota m
inner join tblEspecie e on m.idespecie = e.id
inner join tblRaza r on m.idraza = r.id
inner join tblColor c on m.idcolor = c.id
inner join tblSexo s on m.idsexo = s.id
inner join tblPropietario p on m.idpropietario = p.id
inner join tblusuarios u on m.usuariocreacion = u.id;

select 
m.nombre,
v.descripcion,
mv.fechaaplicacion,
mv.lote
from tblMascotaVacuna mv 
inner join tblmascota m on mv.idmascota = m.id
inner join tblVacunas v on mv.idvacuna = v.id;
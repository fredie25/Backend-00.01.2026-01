DROP TABLE IF  EXISTS tblMascotaVacuna;
DROP TABLE IF  EXISTS tblMascota;
DROP TABLE IF  EXISTS tblPropietario;
DROP TABLE IF  EXISTS tblVacunas;
DROP TABLE IF  EXISTS tblEspecie;
DROP TABLE IF  EXISTS tblRaza;
DROP TABLE IF  EXISTS tblColor;
DROP TABLE IF  EXISTS tblSexo;
DROP TABLE IF  EXISTS tblNacionalidad;
DROP TABLE IF  EXISTS tblUsuarios;

create table tblUsuarios(
	id serial primary key,
	username varchar(50) unique not null,
	password varchar(255) not null,
	email varchar(50) unique not null,
	isActivo BOOLEAN NOT NULL DEFAULT FALSE,
	usuarioCreacion int not null,
	fechaCreacion TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
	usuarioModificacion int null,
	fechaModificacion TIMESTAMP WITH TIME ZONE null,
	CONSTRAINT fk_usrCreacion FOREIGN KEY (usuarioCreacion) references tblusuarios(id),
	CONSTRAINT fk_usrModificacion FOREIGN KEY (usuarioModificacion) references tblusuarios(id)
);

insert into tblUsuarios (username, password, email, usuariocreacion)
values('rpineda','123456', 'rpineda@x-codec.net', 1),
('dlopez','123456', 'dlopez@x-codec.net', 1);

update tblUsuarios set 
	email='dlopez@gmail.com', 
	usuarioModificacion = 1, 
	fechaModificacion = now() ,
	isActivo = TRUE
where id=2;

-- delete from tblUsuarios where id=2;

select * from tblUsuarios;
select * from tblUsuarios where isActivo = TRUE;


CREATE TABLE IF NOT EXISTS tblNacionalidad(
	id serial primary key,
	descripcion varchar(50) not null,
	isActivo BOOLEAN NOT NULL DEFAULT TRUE,
	usuarioCreacion int not null,
	fechaCreacion TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
	usuarioModificacion int null,
	fechaModificacion TIMESTAMP WITH TIME ZONE null,
	CONSTRAINT fk_usrCreacion FOREIGN KEY (usuarioCreacion) references tblusuarios(id),
	CONSTRAINT fk_usrModificacion FOREIGN KEY (usuarioModificacion) references tblusuarios(id)
);

insert into tblNacionalidad(descripcion, usuarioCreacion)
values('Peruana',1),
('Ecuatoriana',1),
('Venezolana',1),
('Angoleña',1);

update tblNacionalidad set
	isActivo = FALSE,
	usuarioModificacion = 1, 
	fechaModificacion = now()
where descripcion = 'Angoleña';

select * from tblNacionalidad where isactivo = true;
select * from tblNacionalidad;

CREATE TABLE IF NOT EXISTS tblSexo(
	id serial primary key,
	descripcion varchar(50) not null,
	isActivo BOOLEAN NOT NULL DEFAULT TRUE,
	usuarioCreacion int not null,
	fechaCreacion TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
	usuarioModificacion int null,
	fechaModificacion TIMESTAMP WITH TIME ZONE null,
	CONSTRAINT fk_usrCreacion FOREIGN KEY (usuarioCreacion) references tblusuarios(id),
	CONSTRAINT fk_usrModificacion FOREIGN KEY (usuarioModificacion) references tblusuarios(id)
);

insert into tblSexo(descripcion, usuarioCreacion)
values('Macho',1),
('Hembra',1);



select * from tblSexo where isactivo = true;
select * from tblSexo;

CREATE TABLE IF NOT EXISTS tblColor(
	id serial primary key,
	descripcion varchar(50) not null,
	isActivo BOOLEAN NOT NULL DEFAULT TRUE,
	usuarioCreacion int not null,
	fechaCreacion TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
	usuarioModificacion int null,
	fechaModificacion TIMESTAMP WITH TIME ZONE null,
	CONSTRAINT fk_usrCreacion FOREIGN KEY (usuarioCreacion) references tblusuarios(id),
	CONSTRAINT fk_usrModificacion FOREIGN KEY (usuarioModificacion) references tblusuarios(id)
);

insert into tblColor(descripcion, usuarioCreacion)
values('Blanco',1),
('Negro',1);



select * from tblColor where isactivo = true;
select * from tblColor;

CREATE TABLE IF NOT EXISTS tblRaza(
	id serial primary key,
	descripcion varchar(50) not null,
	isActivo BOOLEAN NOT NULL DEFAULT TRUE,
	usuarioCreacion int not null,
	fechaCreacion TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
	usuarioModificacion int null,
	fechaModificacion TIMESTAMP WITH TIME ZONE null,
	CONSTRAINT fk_usrCreacion FOREIGN KEY (usuarioCreacion) references tblusuarios(id),
	CONSTRAINT fk_usrModificacion FOREIGN KEY (usuarioModificacion) references tblusuarios(id)
);

insert into tblRaza(descripcion, usuarioCreacion)
values('Mestizo',1),
('Golden',1);



select * from tblRaza where isactivo = true;
select * from tblRaza;

CREATE TABLE IF NOT EXISTS tblEspecie(
	id serial primary key,
	descripcion varchar(50) not null,
	isActivo BOOLEAN NOT NULL DEFAULT TRUE,
	usuarioCreacion int not null,
	fechaCreacion TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
	usuarioModificacion int null,
	fechaModificacion TIMESTAMP WITH TIME ZONE null,
	CONSTRAINT fk_usrCreacion FOREIGN KEY (usuarioCreacion) references tblusuarios(id),
	CONSTRAINT fk_usrModificacion FOREIGN KEY (usuarioModificacion) references tblusuarios(id)
);

insert into tblEspecie(descripcion, usuarioCreacion)
values('Gato',1),
('Perro',1);



select * from tblEspecie where isactivo = true;
select * from tblEspecie;

CREATE TABLE IF NOT EXISTS tblVacunas(
	id serial primary key,
	descripcion varchar(50) not null,
	isActivo BOOLEAN NOT NULL DEFAULT TRUE,
	usuarioCreacion int not null,
	fechaCreacion TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
	usuarioModificacion int null,
	fechaModificacion TIMESTAMP WITH TIME ZONE null,
	CONSTRAINT fk_usrCreacion FOREIGN KEY (usuarioCreacion) references tblusuarios(id),
	CONSTRAINT fk_usrModificacion FOREIGN KEY (usuarioModificacion) references tblusuarios(id)
);

insert into tblVacunas(descripcion, usuarioCreacion)
values('Triple Felina',1),
('Antirrabica',1);



select * from tblVacunas where isactivo = true;
select * from tblVacunas;

CREATE TABLE IF NOT EXISTS tblPropietario(
	id serial primary key,
	nombres varchar(50) not null,
	apellidos varchar(50) not null,
	telefono varchar(50) not null,
	direccion varchar(100) not null,
	idNacionalidad int not null,
	isActivo BOOLEAN NOT NULL DEFAULT TRUE,
	usuarioCreacion int not null,
	fechaCreacion TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
	usuarioModificacion int null,
	fechaModificacion TIMESTAMP WITH TIME ZONE null,
	CONSTRAINT fk_usrCreacion FOREIGN KEY (usuarioCreacion) references tblusuarios(id),
	CONSTRAINT fk_usrModificacion FOREIGN KEY (usuarioModificacion) references tblusuarios(id),
	constraint fk_nacionalidad foreign key (idNacionalidad) references tblNacionalidad(id)
	);

	insert into tblPropietario(nombres, apellidos,telefono,direccion,idnacionalidad,usuariocreacion)
	values('Roberto','Pineda','916730940','La Victoria',1,1),
	('David','Lopez','916730940','La Victoria',1,1);
	select * from tblPropietario;

CREATE TABLE IF NOT EXISTS tblMascota(
	id serial primary key,
	nombre varchar(50) not null,
	fechaNacimiento TIMESTAMP WITH TIME ZONE null,
	peso decimal(18,3) not null,
	idEspecie int not null,
	idRaza int not null,
	idColor int not null,
	idSexo int not null,
	idPropietario int not null,
	isActivo BOOLEAN NOT NULL DEFAULT TRUE,
	usuarioCreacion int not null,
	fechaCreacion TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
	usuarioModificacion int null,
	fechaModificacion TIMESTAMP WITH TIME ZONE null,
	CONSTRAINT fk_usrCreacion FOREIGN KEY (usuarioCreacion) references tblusuarios(id),
	CONSTRAINT fk_usrModificacion FOREIGN KEY (usuarioModificacion) references tblusuarios(id),
	constraint fk_especie foreign key (idEspecie) references tblEspecie(id),
	constraint fk_raza foreign key (idRaza) references tblRaza(id),
	constraint fk_color foreign key (idColor) references tblColor(id),
	constraint fk_sexo foreign key (idSexo) references tblSexo(id),
	constraint fk_propietario foreign key (idPropietario) references tblPropietario(id)
	);

insert into tblMascota(nombre,peso,idespecie,idraza,idcolor,idsexo,idpropietario,usuarioCreacion)
values('Felipa',4.25, 1,1,1,2,1,1),
('Pancho',4.55,1,1,2,1,1,1);

select * from tblMascota;

CREATE TABLE IF NOT EXISTS tblMascotaVacuna(
	id serial primary key,
	idMascota int not null,
	idVacuna int not null,
	fechaAplicacion TIMESTAMP WITH TIME ZONE not null,
	lote varchar(50) not null,
	isActivo BOOLEAN NOT NULL DEFAULT TRUE,
	usuarioCreacion int not null,
	fechaCreacion TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
	usuarioModificacion int null,
	fechaModificacion TIMESTAMP WITH TIME ZONE null,
	CONSTRAINT fk_usrCreacion FOREIGN KEY (usuarioCreacion) references tblusuarios(id),
	CONSTRAINT fk_usrModificacion FOREIGN KEY (usuarioModificacion) references tblusuarios(id),
	constraint fk_mascota foreign key (idMascota) references tblMascota(id),
	constraint fk_Vacunas foreign key (idVacuna) references tblVacunas(id)
	);

insert into tblMascotaVacuna(idmascota, idvacuna,lote,fechaAplicacion ,usuarioCreacion)
values(1,1,'LOT667',now(),1),
(1,2,'FF99',now(),1),
(2,1,'LOT667',now(),1),
(2,2,'FF99',now(),1);

select * from tblMascotaVacuna;
	
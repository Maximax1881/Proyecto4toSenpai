La base de datos se debería llamar "pokemons"

-- public.pokemones definition

-- Drop table

-- DROP TABLE public.pokemones;

CREATE TABLE public.pokemones (
	id serial4 NOT NULL,
	"name" varchar NOT NULL,
	type1 varchar NOT NULL,
	type2 varchar NULL,
	weight numeric NOT NULL,
	height numeric NOT NULL,
	move1 varchar NOT NULL,
	move2 varchar NULL,
	description varchar NOT NULL,
	pic varchar NOT NULL,
	hp int4 NOT NULL,
	atk int4 NOT NULL,
	def int4 NOT NULL,
	satk int4 NOT NULL,
	sdef int4 NOT NULL,
	spd int4 NOT NULL,
	color varchar NOT NULL,
	seccolor varchar NULL,
	CONSTRAINT pokemones_pk PRIMARY KEY (id)
);
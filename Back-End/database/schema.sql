DROP TABLE IF EXISTS public.products;

CREATE TABLE IF NOT EXISTS public.products
(
    id integer NOT NULL,
    name text COLLATE pg_catalog."default" NOT NULL,
    slogan text COLLATE pg_catalog."default",
    description text COLLATE pg_catalog."default",
    category text COLLATE pg_catalog."default",
    default_price text COLLATE pg_catalog."default",
    CONSTRAINT products_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.products
    OWNER to zrendy;

DROP TABLE IF EXISTS public.styles;

CREATE TABLE IF NOT EXISTS public.styles
(
    id integer NOT NULL,
    "productId" integer,
    name text COLLATE pg_catalog."default",
    sale_price integer,
    original_price integer,
    default_style integer,
    CONSTRAINT styles_pkey PRIMARY KEY (id),
    CONSTRAINT "productId" FOREIGN KEY ("productId")
        REFERENCES public.products (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.styles
    OWNER to zrendy;

DROP TABLE IF EXISTS public.features;

CREATE TABLE IF NOT EXISTS public.features
(
    id integer NOT NULL,
    product_id integer,
    feature text COLLATE pg_catalog."default",
    value text COLLATE pg_catalog."default",
    CONSTRAINT features_pkey PRIMARY KEY (id),
    CONSTRAINT product_id FOREIGN KEY (product_id)
        REFERENCES public.products (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.features
    OWNER to zrendy;

DROP TABLE IF EXISTS public.photos;

CREATE TABLE IF NOT EXISTS public.photos
(
    id integer,
    "styleId" integer,
    url text COLLATE pg_catalog."default",
    thumbnail_url text COLLATE pg_catalog."default",
    CONSTRAINT "styleId" FOREIGN KEY ("styleId")
        REFERENCES public.styles (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.photos
    OWNER to zrendy;

DROP TABLE IF EXISTS public.skus;

CREATE TABLE IF NOT EXISTS public.skus
(
    id integer NOT NULL,
    "styleId" integer,
    size text COLLATE pg_catalog."default",
    quantity integer,
    CONSTRAINT "SKUs_pkey" PRIMARY KEY (id),
    CONSTRAINT "styleId" FOREIGN KEY ("styleId")
        REFERENCES public.styles (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.skus
    OWNER to zrendy;


COPY public.products (id, name, slogan, description, category, default_price) FROM '/Users/zrendy/HackReactor/SDC/Back-End/dataset/product.csv' DELIMITER ',' CSV HEADER;

COPY public.features (id, product_id, feature, value) FROM '/Users/zrendy/HackReactor/SDC/Back-End/dataset/features.csv' DELIMITER ',' CSV HEADER;

COPY public.styles (id, \"productId\", name, sale_price, original_price, default_style) FROM '/Users/zrendy/HackReactor/SDC/Back-End/dataset/styles.csv' DELIMITER ',' CSV HEADER NULL 'null';

COPY public.skus (id, styleId, size, quantity) FROM '/Users/zrendy/HackReactor/SDC/Back-End/dataset/skus.csv' DELIMITER ',' CSV HEADER;

COPY public.photos (id, styleId, url, thumbnail_url) FROM '/Users/zrendy/HackReactor/SDC/Back-End/dataset/photos.csv' DELIMITER ',' CSV HEADER;


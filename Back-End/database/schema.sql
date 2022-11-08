DROP TABLE IF EXISTS products CASCADE;
DROP TABLE IF EXISTS styles CASCADE;
DROP TABLE IF EXISTS features CASCADE;
DROP TABLE IF EXISTS skus CASCADE;
-- DROP TABLE IF EXISTS photos CASCADE;

CREATE TABLE IF NOT EXISTS products (
    id integer NOT NULL,
    "name" text NOT NULL,
    slogan VARCHAR(255),
    "description" text,
    category VARCHAR(20),
    default_price VARCHAR(10),
    createdAt timestamp NOT NULL DEFAULT NOW(),
    updatedAt timestamp NOT NULL DEFAULT NOW(),
    PRIMARY KEY (id)
);

COPY products (id, "name", slogan, "description", category, default_price) FROM '/Users/zrendy/HackReactor/SDC/Back-End/dataset/product.csv' DELIMITER ',' CSV HEADER;


CREATE TABLE IF NOT EXISTS styles (
    id integer NOT NULL,
    productId integer,
    "name" VARCHAR(100),
    sale_price integer,
    original_price integer,
    default_style boolean,
    PRIMARY KEY (id),
    FOREIGN KEY (productId) REFERENCES products (id)
);

COPY styles (id, productId, "name", sale_price, original_price, default_style) FROM '/Users/zrendy/HackReactor/SDC/Back-End/dataset/styles.csv' DELIMITER ',' CSV HEADER NULL 'null';

CREATE INDEX stylesIndex ON styles(productId);

CREATE TABLE IF NOT EXISTS features (
    id integer NOT NULL,
    product_id integer,
    feature VARCHAR(50),
    value VARCHAR(50),
    PRIMARY KEY (id),
    FOREIGN KEY (product_id) REFERENCES products (id)
);

COPY features (id, product_id, feature, "value") FROM '/Users/zrendy/HackReactor/SDC/Back-End/dataset/features.csv' DELIMITER ',' CSV HEADER;

CREATE INDEX featuresIndex ON features(product_id);

CREATE TABLE IF NOT EXISTS photos (
    id integer,
    styleId integer,
    "url" VARCHAR(100),
    thumbnail_url VARCHAR(100),
    PRIMARY KEY (id),
    FOREIGN KEY (styleId) REFERENCES styles (id)
);

-- COPY photos (id, styleId, "url", thumbnail_url) FROM '/Users/zrendy/HackReactor/SDC/Back-End/dataset/photos.csv' DELIMITER ',' CSV HEADER;

-- CREATE INDEX photosIndex ON photos(styleId);

CREATE TABLE IF NOT EXISTS skus (
    id integer NOT NULL,
    styleId integer,
    size VARCHAR(20),
    quantity integer,
    PRIMARY KEY (id),
    FOREIGN KEY (styleId) REFERENCES styles (id)
);

COPY skus (id, styleId, size, quantity) FROM '/Users/zrendy/HackReactor/SDC/Back-End/dataset/skus.csv' DELIMITER ',' CSV HEADER;

CREATE INDEX skusIndex ON skus(styleId);

CREATE TABLE IF NOT EXISTS related (
    id integer NOT NULL,
    current_product_id integer,
    related_product_id integer,
    PRIMARY KEY (id),
    FOREIGN KEY (current_product_id) REFERENCES products (id)
);

COPY related (id, current_product_id, related_product_id) FROM '/Users/zrendy/HackReactor/SDC/Back-End/dataset/related.csv' DELIMITER ',' CSV HEADER;

CREATE INDEX relatedIndex ON related(current_product_id);
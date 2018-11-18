

CREATE TABLE task
(
  id    BIGSERIAL NOT NULL
    CONSTRAINT task_pkey
    PRIMARY KEY,
  image TEXT,
  title TEXT      NOT NULL,
  text  TEXT
);
CREATE UNIQUE INDEX task_id_uindex
  ON task (id);
COMMENT ON TABLE task IS 'Таблица с заданиями для умного дома';

CREATE TABLE public.script
(
  id    BIGSERIAL NOT NULL
    CONSTRAINT script_pkey
    PRIMARY KEY,
  image TEXT,
  title TEXT      NOT NULL,
  text  TEXT
);
CREATE UNIQUE INDEX script_id_uindex
  ON script (id);
COMMENT ON TABLE public.script IS 'Таблица со сценириями для умного дома';


CREATE TABLE public.appliance
(
  id    BIGSERIAL NOT NULL
    CONSTRAINT appliance_pkey
    PRIMARY KEY,
  title TEXT      NOT NULL,
  text  TEXT,
  is_active int,
  value int,
  action text
);
CREATE UNIQUE INDEX appliance_id_uindex
  ON appliance (id);
COMMENT ON TABLE public.appliance IS 'Таблица со спиком бытовой техники для умного дома';


insert into task (image, title, text) VALUES
  ('thermometer', 'Philips Cooler', 'Начнёт охлаждать в 16:30'),
  ('thermometer', 'Philips Cooler', 'Начнёт охлаждать в 16:30'),
  ('thermometer', 'Philips Cooler', 'Начнёт охлаждать в 16:30'),
  ('thermometer', 'Philips Cooler', 'Начнёт охлаждать в 16:30');


insert into script (image, title, text) VALUES
  ('bright_sun', 'Выключить весь свет в доме и во дворе', ''),
  ('time', 'Я ухожу', ''),
  ('bright_sun', 'Выключить весь свет в доме и во дворе', ''),
  ('bright_sun', 'Включить свет \u2028в коридоре', ''),
  ('bright_thermometer', 'Набрать горячую ванну', ''),
  ('bright_sun', 'Сделать пол тёплым во всей квартире', ''),
  ('bright_sun', 'Включить свет в коридоре', ''),
  ('bright_thermometer', 'Набрать горячую ванну', '');


insert into appliance (title, text, is_active, value, action) VALUES
  ('Xiaomi Yeelight LED Smart Bulb', 'Включено', 1, null, 'light_classic'),
  ('D-Link Omna 180 Cam', 'Выключено до 17:00', 0, 50, 'classic_sound'),
  ('Elgato Eve Degree Connected', 'Выключено до 17:00', 1, 15, 'temperature_classic'),
  ('LIFX Mini Day & Dusk A60 E27', 'Включится в 17:00', 0, null, 'light_classic'),
  ('Xiaomi Mi Air Purifier 2S', 'Включено', 0, null, 'light_classic'),
  ('Philips Zhirui', 'Выключено', 1, null, 'light_classic'),
  ('Xiaomi Yeelight LED Smart Bulb', 'Включено', 1, 0, 'classic_sound'),
  ('D-Link Omna 180 Cam', 'Включится в 17:00', 0, null, 'light_classic'),
  ('Elgato Eve Degree Connected', 'Выключено до 17:00', 0, null, 'light_classic'),
  ('Elgato Eve Degree Connected', 'Выключено до 17:00', 1, null, 'temperature_alternative');



-- TRUNCATE table public.appliance;
-- drop table public.appliance;


-- select * from appliance



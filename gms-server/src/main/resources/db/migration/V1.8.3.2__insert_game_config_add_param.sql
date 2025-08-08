INSERT INTO `game_config` (`config_type`, `config_sub_type`, `config_clazz`, `config_code`, `config_value`, `config_desc`)
VALUES
  ('server', 'Game Mechanics', 'java.lang.Boolean', 'unlimited_projectiles', 'false', 'unlimited_projectiles');

INSERT INTO `lang_resources` (`lang_type`, `lang_base`, `lang_code`, `lang_value`)
VALUES
  ('zh-CN', 'game_config', 'unlimited_projectiles', '是否启用投射物不消耗数量');

INSERT INTO `lang_resources` (`lang_type`, `lang_base`, `lang_code`, `lang_value`)
VALUES
  ('en-US', 'game_config', 'unlimited_projectiles', 'It is allowed for the Steal skill to be applied to quest-type items.');
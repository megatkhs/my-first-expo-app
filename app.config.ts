// app.jsonの内容を動的に変更するためのファイル
// 静的な設定はapp.json、環境によって変更する場合はこのファイルで指定する
import type { ConfigContext, ExpoConfig } from 'expo/config';

const APP_NAME_PREFIX_MAP = {
  development: '(DEV)',
  test: '(STG)',
  production: '',
};

const APP_SLUG_PREFIX_MAP = {
  development: '-dev',
  test: '-stg',
  production: '',
};

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: `${config.name}${APP_NAME_PREFIX_MAP[process.env.NODE_ENV]}`,
  slug: `${config.slug}${APP_SLUG_PREFIX_MAP[process.env.NODE_ENV]}`,
});

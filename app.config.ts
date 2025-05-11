// app.jsonの内容を動的に変更するためのファイル
// 静的な設定はapp.json、環境によって変更する場合はこのファイルで指定する
import type { ConfigContext, ExpoConfig } from 'expo/config';

const APP_PREFIX_MAP = {
  development: '(DEV)',
  test: '(STG)',
  production: '',
};

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  slug: `${config.slug}${APP_PREFIX_MAP[process.env.NODE_ENV]}`,
  name: `${config.name}${APP_PREFIX_MAP[process.env.NODE_ENV]}`,
});

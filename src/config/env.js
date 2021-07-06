import {DEV_BACKEND_URL} from '@env';

const devEnvironmentVariables = {
  DEV_BACKEND_URL,
};

export default __DEV__ ? devEnvironmentVariables : null;

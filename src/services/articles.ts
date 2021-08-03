import request from '@/utils/request';

export async function getList(): Promise<any> {
  return request('/article/list');
}


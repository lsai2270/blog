import request from '@/utils/request';

export async function getList(): Promise<any> {
  return request('/article/list');
}
export async function createArticle(data: any): Promise<any> {
  return request.post('/article/create', { data });
}

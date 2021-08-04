import request from '@/utils/request';

export async function createTags(data: any): Promise<any> {
  return request.post('/tag/create', { data });
}
export async function getList(data?: any): Promise<any> {
  return request.get('/tag/list', { data });
}
export async function getListById(id: string): Promise<any> {
  return request.get(`/tag/list/${id}`);
}

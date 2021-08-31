import request from '@/utils/request';

export async function createTags(data: any): Promise<any> {
  return request.post('/tag/create', { data });
}
export async function getList(params?: any): Promise<any> {
  const newParams = {
    page: params.current,
    limit: params.pageSize
  }
  return request.get('/tag/list', { params:newParams });
}
export async function getAllTagsList(): Promise<any> {
  return request.get('/tag/list/all');
}
export async function getListById(id: string): Promise<any> {
  return request.get(`/tag/list/${id}`);
}

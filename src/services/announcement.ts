import request from '@/utils/request';

export async function createAnnouncement(data: any): Promise<any> {
  return request.post('/announcement/create', { data });
}
export async function getAllAnnouncementList(): Promise<any> {
  return request.get('/announcement/list/all');
}
export async function updateAnnouncement(data: any): Promise<any> {
  return request.post('/announcement/update', { data });
}

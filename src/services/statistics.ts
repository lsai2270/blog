import request from '@/utils/request';

export async function getStatisticsData(): Promise<any> {
  return request.get(`/statistics`);
}

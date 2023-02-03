import useSWRMutation from 'swr/mutation';

import { ILoanCalculationRequest, ILoanCalculationResult } from '@s-com/types';

import { postToApi } from '@/services/api';

const BASE_URL = '/v1/loan';

export const useCalculateLoan = () => {
  const { trigger, data, error, isMutating } = useSWRMutation<
    ILoanCalculationResult,
    Error
  >(
    `${BASE_URL}/calculate`,
    postToApi<ILoanCalculationRequest, ILoanCalculationResult>,
    {
      revalidate: false,
    },
  );

  return { calculateLoan: trigger, isMutating, data, error };
};

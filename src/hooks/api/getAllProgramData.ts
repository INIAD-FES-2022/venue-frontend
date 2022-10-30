import { Response } from '../../types/api/allPrograms';

export const getAllProgramData = async () => {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_API_ROOT ?? ''}program/`),
  );
  const programs = (await res.json()) as Response;

  return programs;
};

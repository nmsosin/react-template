import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from '../../src/store/index';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

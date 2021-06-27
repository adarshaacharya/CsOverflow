import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'store';

/**
 * wrapper around useDispatch
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();

/**
 * wrapper around useSelector to automatically select rootstate
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

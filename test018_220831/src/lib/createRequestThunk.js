import { call, put } from "redux-saga/effects";
import { startLoading, finishLoading } from "../modules/loading";

export default function createRequestThunk(type, request) {
    // 성공 및 실패 액션 타입을 정의합니다.
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;

    // return params => async dispatch => {
    //     dispatch({ type }); // 시작됨
    //     dispatch(startLoading(type));
    //     try {
    //         const response = await request(params);
    //         dispatch({
    //             type: SUCCESS,
    //             payload: response.data
    //         }); // 성공
    //         dispatch(finishLoading(type));
    //     } catch (e) {
    //         dispatch({
    //             type: FAILURE,
    //             payload: e,
    //             error: true
    //         }); // 에러 발생
    //         dispatch(startLoading(type));
    //         throw e;
    //     }
    // };

    return function*(action) {
        yield put(startLoading(type)); // 로딩 시작
        try {
            const response = yield call(request, action.payload);
            yield put({
                type: SUCCESS,
                payload: response.data
            });
        } catch (e) {
            yield put({
                type: FAILURE,
                payload: e,
                error: true
            });
        }
        yield put(finishLoading(type)); // 로딩 끝
    };
}

// 사용법: createRequestThunk('GET_USERS',api.getUsers);
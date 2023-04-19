import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { RootState } from '../../../redux/store';

import Layout from "../../components/layout/Layout"
import HomeContainer from "./HomeContainer"
import SignInPage from '../signIn/SignInPage';

const HomePage = () => {
    const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();
    const userId = useSelector((state: RootState) => state.auth.userId);

    if (userId != null) {
        return (
            <Layout option={0}>
                <HomeContainer/>
            </Layout>
        )
    }
    else {
        //alert("\n로그인 정보가 없습니다.\n로그인 화면으로 이동합니다.")
        return <SignInPage></SignInPage>;
    }
}

export default HomePage
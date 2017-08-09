/**
 * Created by zhangxy on 2017/3/30.
 */
import {SETTOPJOBLIST} from '../action/action';

const initialstate = {
    aJobList: []
};

export default function oTopJobList(state = initialstate, action) {

    switch (action.type) {
        case SETTOPJOBLIST:
            return {

                aJobList:action.data
            };

        default:
            return state
    }
}
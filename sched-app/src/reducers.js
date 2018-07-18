import * as Actions from './actions';

const initial_state = {

    startDate: 'July 5, 2018',
    endDate: 'April 26, 2019',

    thematic_section_order: '',
    thematic_surgery_order: '',
    thematic_med_order: '',
    thematic_family_order: '',
    themes: ['', '', ''],

    block2: [
        [ "A block", ['August 27, 2018', 'September 28, 2018'] ],
        [ "B block", ['October 1, 2018', 'October 31, 2018'] ],
        [ "Interstitial Day", ['November 1, 2018'] ],
        [ "Careers in medicine", ['November 2, 2018'] ],
        [ "C Block", ['2018-11-05', 'December 13, 2018']],
        [ "Interstitial Day", ['December 14, 2018'] ],
        [ "Interstitial Day", ['December 17, 2018'] ],
        [ "Careers in Medicine", ['December 18, 2018'] ],
        [ "Winter vacation", ['December 19, 2018', 'January 1, 2019'] ]
    ],

    block3: [
        [ "Interstitial Day", ['2019-01-02'] ],
        [ "A block", ['2019-01-03', '2019-02-08'] ],
        [ "B block", ['2019-02-11', '2019-03-15']],
        [ "Spring vacation", ['2019-03-16', '2019-03-24'] ],
        [ "C block", ['2019-03-25', '2019-04-25'] ],
        [ "Careers in Medicine", ['2019-04-25'] ],
        [ "Interstitial", ['2019-04-26'] ]
    ],

    fces1: {
        "a": ['2018-06-04', '2018-06-08'],
        "b": ['2018-07-09', '2018-07-13'],
        "c": ['2018-07-16', '2018-07-20']},

    fces2: {
        "a": ['2018-09-24', '2018-09-28'],
        "b": ['2018-10-01', '2018-10-05'],
        "c": ['2018-11-05', '2018-11-09']},

    fces3: {
        "a": ['2019-02-04', '2019-02-08'],
        "b": ['2019-03-11', '2019-03-15'],
        "c": ['2019-03-25', '2019-03-29']}
};

const initial_state_block1 = {
    dates: [
        [ "A block", ['May 7, 2018', 'June 8, 2018'] ],
        [ "Interstitial Day", ['June 11, 2018'] ],
        [ "B block", ['June 12, 2018', 'July 13, 2018']],
        [ "C block", ['July 16, 2018', 'August 16, 2018']],
        [ "Interstitial Day", ['August 17, 2018'] ],
        [ "Summer vacation" , ['August 17, 2018', 'August 26, 2018']]
    ],
}

export const reducers = (state = initial_state, action) => {
    switch (action.type){
    case Actions.SET_START_DATE:
        return {...state, startDate: action.startDate };
    case Actions.SET_THEMATIC_SECTION_ORDER:
        return {...state,
                thematic_section_order: action.thematic_section_order.value,
                themes: action.thematic_section_order.value.split('-')
               };
    case Actions.SET_THEMATIC_MED_ORDER:
        return {...state,
                thematic_med_order: action.order.value };
    case Actions.SET_THEMATIC_SURGERY_ORDER:
        return {...state,
            thematic_surgery_order: action.order.value };
    case Actions.SET_THEMATIC_FAMILY_ORDER:
        return {...state,
                thematic_family_order: action.order.value };
    default:
        return state;
    }
};

export const block1_reducers = (state = initial_state_block1, action) => {
    switch (action.type){
    case Actions.SET_DATES:
        let dates = [
            ...state.dates.slice(0, action.idx),
            [action.key, action.dates],
            ...state.dates.slice(action.idx+1)
        ];
        return {...state,
                dates};
    default:
        return state;
    }
};

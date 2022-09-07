import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing:border-box;
        outline: 0;
    }
    :root {
        --color-brand1: #371B58;
        --color-brand2: #4C3575;
        --color-brand3: #5B4B8A;
        --color-brand4: #7858A6;
        --color-grey0: #0B0D0D;
        --color-grey1: #212529;
        --color-grey2: #495057;
        --color-grey3: #868E96;
        --color-grey4: #ADB5BD;
        --color-grey5: #CED4DA;
        --color-grey6: #DEE2E6;
        --color-grey7: #E9ECEF;
        --color-grey8: #F1F3F5;
        --color-grey9: #F8F9FA;
        --color-grey10: #FDFDFD;
        --color-whiteFixed: #FFFFFF;
        
        --color-alert1: #CD2B31;
        --color-alert2: #FDD8D8;
        --color-alert3: #FFE5E5;
        --color-sucess1: #18794E;
        --color-sucess2: #CCEBD7;
        --color-sucess3: #DDF3E4;
        --color-random1: #E34D8C;
        --color-random2: #C04277;
        --color-random3: #7D2A4D;
        --color-random4: #7000FF;
        --color-random5: #6200E3;
        --color-random6: #36007D;
        --color-random7: #349974;
        --color-random8: #2A7D5F;
        --color-random9: #153D2E;
        --color-random10: #6100FF;
        --color-random11: #5700E3;
        --color-random12: #30007D;
    }

    button {
        cursor: pointer;
    }
    li {
        list-style: none;
    }
    body {
        background-color: var(--color-brand4);
    }
`;

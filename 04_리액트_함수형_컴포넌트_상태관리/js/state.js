
function App(){
    const {mainStyle,h1Style,h2Style,countStyle,btnStyle}=appStyle.init;
    return (
        <div id="app" style={mainStyle}>
            <h1 style={h1Style}>나는 컴포넌트야</h1>
            <CountComponent/>
        </div>
    );
};

function CountComponent(){
    //함수형에 존재하는 특수한 형태의 상태관리 훅이라고 한다.
    const [cnt, setCnt]=React.useState(0);//괄호안은 초기값

    const countAddEvent = () => {
        setCnt(cnt => cnt+1)
    }
    const countReduceEvent = () => {
        setCnt(cnt => cnt-1)
    }
    const {mainStyle,h1Style,h2Style,countStyle,btnStyle}=appStyle.init;
    return(
        <div id="count">
            <h1 style={h1Style}>카운트 컴포넌트</h1>
            <button onClick={countAddEvent} style={btnStyle}>+</button>
            <button onClick={countReduceEvent} style={btnStyle}>-</button>
            <ViewComponent cnt={cnt}/>
        </div>
    )
}
//하위 함수형 컴포넌트에 내려 보내는 방법으로 반드시 props로 가져와야함 괄호 중괄호 방법1
/* function ViewComponent(props){//가져오는방법 props로 가져와야함
    return (
        <div id="view">
            <h1 style={appStyle.init.countStyle}>{props.cnt}</h1>
        </div>
    )
} */

//비구조화 방법2 {}안에 props안써도됨
/* function ViewComponent(props){//가져오는방법 props로 가져와야함 
    const {cnt}=props;
    return (
        <div id="view">
            <h1 style={appStyle.init.countStyle}>{cnt}</h1>
        </div>
    )
} */
//방법3
function ViewComponent({cnt}){//중괄호안에 cnt
    return (
        <div id="view">
            <h1 style={appStyle.init.countStyle}>{cnt}</h1>
        </div>
    )
}




const appStyle={
    init: {
        mainStyle:{
            textAlign:'center',
        },
        h1Style:{
            fontSize:'40px',
            color:'#f00',
            padding:'20px 0'
        },
        h2Style:{
            fontSize:'80px',
            color:'#dd0',
            padding:'20px 0'
        },
        countStyle:{
            fontSize:'100px',
            color:'#39c',
            padding:'0 0 30px 0'
        },
        btnStyle:{
            fontSize:'20px',
            color:'#fff',
            padding:'10px 20px',
            cursor:'pointer',
            background:'#000',
            margin:'0 10px'
        },
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

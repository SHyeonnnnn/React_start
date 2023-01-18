function App(){
    return(
        <div id="app" style={appStyle.init.mainStyle}>
            <h1>App 컴포넌트</h1>
            <MainComponent title="메인컴포넌트"/>
        </div>
    );
}

class MainComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {//state
            cnt:0
        }
    }
    // ---------render 밖에서 사용할때 화살표 함수 const 사용불가
    countEvent1 = () => {
        alert('countEvent1 클릭 이벤트 테스트------------')
    }
    countAddEvent = () => {
        this.setState({
            cnt: this.state.cnt+1
        })
    }   
    countSubtractAddEvent = () => {
        this.setState({
            cnt: this.state.cnt-1
        })
    }   

    render() { /*-------- render안에서 함수를 사용할땐 const 꼭 써야함---------- */
        const countEvent2=()=>{
            alert('countEvent2 클릭 이벤트 테스트------------')
        }
        const {title}=this.props //구조분해 할당
        const {mainStyle,h1Style,h2Style,countStyle,btnStyle}=appStyle.init;
        const {cnt}=this.state
        return (
            <div id='main'>
                {/* <h1>{this.props.title}</h1> */}{/* 구조분해할당안하고 그냥쓴느거 */}
                <h1 style={h1Style}>{title}</h1> {/* 위에 구조분해할당으로 넣은거 */}
                <h2 style={h2Style}>{cnt}</h2>
                
                {/* Render 안에 함수를 불러올땐{함수명}/render 밖의 함수를 불러올땐{this.함수명} */}
                {/* <button onClick={this.countEvent1}>버튼</button> */}{/* 밖에서 쓴거는 this를 써야함 */}
                {/* <button onClick={countEvent2}>버튼</button> */}{/* 안에서쓴거는 this를 빼야함 */}

                <button style={btnStyle} onClick={this.countAddEvent}>1증가</button>
                <button style={btnStyle} onClick={this.countSubtractAddEvent}>1감소</button>
                <ViewComponent cnt={cnt}/> {/* 스테이트 값을 하위컴포넌트에 내려보낼때 */}
            </div>
        );
    }
}


class ViewComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>ViewComponent 하위 컴포넌트</h1>
                <h2>{this.props.cnt}</h2>
            </div>
        );
    }
}


/* const mainStyle={
    textAlign:'center'
} */
/* const mainStyleh1={
    fontSize:'40px',
    color:'#f00',
    padding:'20px 0'
} */
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
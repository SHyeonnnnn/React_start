

class App extends React.Component {
    constructor(props){
        // console.log('1. 생명주기 constructor' );
        super(props);
        //입력상자 아이디를 선택자로 사용등록 ref 생성 create 생성자함수
        //폼 입력상 아이디에 속성(ref)를 넣어주고 연결
        this.inputRefId=React.createRef(); //Ref 생성 create 생성자 함수가 선택자로 생성한다.
        this.state={
            id: "", //원시타입
            name:"",
            pw:"",
            member: [] //객체타입
        }
    }
    onChangeName = (e) => {
        //console.log(e.target.value);
        this.setState({
            name:e.target.value 
        });
    }

    onChangeId = (e) => {
        this.setState({
            id:e.target.value 
        });
    }
    onChangePw = (e) =>{
        this.setState({
            pw:e.target.value 
        });
    }
   /*  onClickSubmit = (e) =>{
        e.preventDefault();
        this.setState({
            member:[
                ...this.state.member,
                {
                    id:this.state.id,
                    name:this.state.name,
                    pw:this.state.pw
                }
            ]
        })
    } */
    onSubmitForm= (e) => {
        e.preventDefault();
        this.setState({
            member: [
                ...this.state.member,
                {
                    id:this.state.id,
                    name:this.state.name,
                    pw:this.state.pw
                }
            ]
        })
        //초기화
        this.setState({
            id:'',
            name:'',
            pw:''
        });
        this.inputRefId.current.focus();
    }
    componentDidMount(){
        // console.log('3. 생명주기 componentDidMount' );
        this.inputRefId.current.focus();//시작하자마자 id에 포커스
    }
    render() {
        // console.log('2. 생명주기 render' );
        return (
            <div id='app'>
                <h1 style={{color: '#f00', textAlign:'center'}}>회원가입 입력 폼</h1>
                <form onSubmit={this.onSubmitForm} action='member.php' method='post' name='member' id='member'>
                    <div>
                        <input style={styleInput} type="text" onChange={this.onChangeId} placeholder='아이디을 입력하세요' value={this.state.id} ref={this.inputRefId}/>
                    </div>
                    <div>
                        <input style={styleInput} type="text" placeholder='이름을 입력하세요' value={this.state.name} onChange={this.onChangeName} />
                    </div>
                    <div>
                        <input style={styleInput} type="password" placeholder='비밀번호를 입력하세요' value={this.state.pw} onChange={this.onChangePw} />
                    </div>
                    <div>
                        <button type="submit">전송</button>
                    </div>
                </form>
                <MemberComponent member={this.state.member}/>
            </div>
        );
    }
}

class MemberComponent extends React.Component {
    render() {
        console.log(this.props.member);
        const memberList = this.props.member.map((item, idx) => {
            return(
                <tr key={idx+1}>
                    <td style={{border:'1px solid #000',borderCollapse:'collapse'}}>{idx+1}</td>
                    <td style={{border:'1px solid #000',borderCollapse:'collapse'}}>{item.id}</td>
                    <td style={{border:'1px solid #000',borderCollapse:'collapse'}}>{item.name}</td>
                    <td style={{border:'1px solid #000',borderCollapse:'collapse'}}>{item.pw}</td>
                </tr>
            )
        })
        return (
            <div id="list">
                <table style={{border:'1px solid #000',borderCollapse:'collapse',width:'100%',padding:'20px'}}>
                    <thead>
                        <tr>
                            <th style={{border:'1px solid #000',borderCollapse:'collapse'}}>번호</th>
                            <th style={{border:'1px solid #000',borderCollapse:'collapse'}}>아이디</th>
                            <th style={{border:'1px solid #000',borderCollapse:'collapse'}}>이름</th>
                            <th style={{border:'1px solid #000',borderCollapse:'collapse'}}>비밀번호</th>
                        </tr>
                    </thead>
                    <tbody>
                        {memberList}
                    </tbody>
                </table>
            </div>
        );
    }
}

const styleInput={
    width:'100%',
    height:'30px',
    padding:'5px 10px',
    marginBottom:'5px',
    boxSizing:'border-box'
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

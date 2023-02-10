
class App extends React.Component {
    constructor(props){
        super(props);
        this.inputRefId=React.createRef();
        this.state={ 
            num: 1,
            id: "",
            name: "",
            email: "",
            password: "",
            members  : [
                {
                    num: '',
                    id: '',
                    name: '',
                    email: '',
                    password: ''
                }
            ],
            update:false
        }
    }
    
    onChangeId= (e) => {
        this.setState({
            id:e.target.value
        })
    }
    onChangeName = (e) => {
        //console.log(e.target.value);
        this.setState({ //setState가 있어야 바뀌는 값을 받아올 수 있음
            name:e.target.value
        })
    }
    onChangeEmail= (e) => {
        this.setState({
            email:e.target.value
        })
    }
    onChangePw= (e) => {
        this.setState({
            password:e.target.value
        })
    }
    onSubmitForm=(e) => {
        e.preventDefault();
        
        //한 레코드 단위로 객체 구성
        let obj = {
            num:this.state.num,
            id:this.state.id,
            name:this.state.name,
            email:this.state.email,
            password:this.state.password,
        }
        //저장할 때는 문자열로 변환하여 저장
        localStorage.setItem(this.state.num, JSON.stringify(obj)) //obj를 localStorage에 집어넣기
        this.memberListLoad();

        //저장된 localStorage 데이터 가져오기
        //localStorage.getItem(키) => value{값} 출력
        

        //초기화
        this.setState({
            num: localStorage.length+1,
            id: '',
            name: '',
            email: '',
            password: '',
            update:false
        });
        this.inputRefId.current.focus() //현재 id에 포커스
    }
    memberListLoad = () => { //<-------------------- 시작하자마자 가져오기 위함
        let member=[];
        for(let i=0; i<localStorage.length; i++){
            member.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
        this.setState({
            members:member
        })

        let max=0;
        for(let i=0; i<localStorage.length; i++){
            if(max < Number(localStorage.key(i))){
                max=Number(localStorage.key(i))
            }
        }
        this.setState({num: max+1})
    }

    componentDidMount(){
       this.memberListLoad();
    }

    onClickDeletefn = (deletBun) => {
        localStorage.removeItem(deletBun);
        this.memberListLoad();
    }
    onClickUpdatefn = (updateBun) => {
        let imsiObj={}
        imsiObj=JSON.parse(localStorage.getItem(updateBun));

        this.setState({
            num:updateBun,
            id:imsiObj.id,
            name:imsiObj.name,
            email:imsiObj.email,
            pw:imsiObj.pw,
            update:true
        })
    }

    render() {
        //console.log('2 생명주기 render')
        return (
            <div id='app'>
                <h1 style={{color: '#f00', textAlign: 'center'}}>회원가입 입력 폼</h1>
                <form onSubmit={this.onSubmitForm} action="member.php" method="post" name="member" id="member">
                    <div>
                        <input style={styleInput} type="text" placeholder="아이디를 입력하세요" onChange={this.onChangeId} value={this.state.id} ref={this.inputRefId}/>
                    </div>
                    <div>
                        <input style={styleInput} type="text" placeholder="이름을 입력하세요" onChange={this.onChangeName} value={this.state.name}/> {/* state는 변경되는 값, props는 값을 그대로 가져오는것 */}
                    </div>
                    <div>
                        <input style={styleInput} type="text" placeholder="이메일를 입력하세요" onChange={this.onChangeEmail} value={this.state.email}/>
                    </div>
                    <div>
                        <input style={styleInput} type="password" placeholder="비밀번호를 입력하세요" onChange={this.onChangePw} value={this.state.password}/>
                    </div>
                    <div style={{textAlign:'center'}}>
                        <button type="submit" style={{margin:'10px 0',padding:'20px 40px',width:'100%',backgrond:'#ccc',border:'none',fontSize:'20px',fontWeight:'bold' }}>{this.state.update?'수정하기':'전 송'}</button>
                    </div>
                </form>
                <MemberComponent members={this.state.members} onClickDeletefn={this.onClickDeletefn} onClickUpdatefn={this.onClickUpdatefn}/> {/* 위에서 내려받음 */}
            </div>
        );
    }
}


class MemberComponent extends React.Component {
    // 삭제
    onClickDelete = (e, bun) => {
        e.preventDefault();
        this.props.onClickDeletefn(bun)
    }
    
    // 수정
    onClickUpdate = (e, bun) => {
        e.preventDefault();
        this.props.onClickUpdatefn(bun)
    }
    render() {
        //console.log(this.props.member) //member를 보여줘
        const memberList = this.props.members.map((item) => {
            return(
                <tr key={item.num}>
                    <td style={{border: '1px solid #000'}}>{item.num}</td>{/* 번호는 만든적 없으니 idx로 인덱스 순서 가져오기 */}
                    <td style={{border: '1px solid #000'}}>{item.id}</td>
                    <td style={{border: '1px solid #000'}}>{item.name}</td>
                    <td style={{border: '1px solid #000'}}>{item.email}</td>
                    <td style={{border: '1px solid #000'}}>{item.password}</td>
                    <td style={{border: '1px solid #000',textAlign:'center'}}><button onClick={ (e) => {this.onClickUpdate(e, item.num)}}>수정</button></td>
                    <td style={{border: '1px solid #000',textAlign:'center'}}><button onClick={ (e) => {this.onClickDelete(e, item.num)}}>삭제</button></td>
                </tr>
            )
        })
        return (
            <div id="list">
                <table style={{border: '1px solid #000', borderCollapse: 'collapse', width: '100%', padding: '20px'}}>
                    <thead>
                        <tr>
                            <th style={{border: '1px solid #000'}}>번호</th>
                            <th style={{border: '1px solid #000'}}>아이디</th>
                            <th style={{border: '1px solid #000'}}>이름</th>
                            <th style={{border: '1px solid #000'}}>이메일</th>
                            <th style={{border: '1px solid #000'}}>비밀번호</th>
                            <th style={{border: '1px solid #000'}}>수정</th>
                            <th style={{border: '1px solid #000'}}>삭제</th>
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
    width: '100%',
    height: '30px',
    padding: '5px 10px',
    marginBottom: '5px',
    boxSizing: 'border-box'
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
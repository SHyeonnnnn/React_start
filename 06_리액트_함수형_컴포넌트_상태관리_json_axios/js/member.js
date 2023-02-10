(()=>{
    const MemberComponent = (props) => {
        //axios 외부 데이터 DATA폴더안에 저장된 member.json
        //배열 저장하고(상태관리) 저장된 데이터를 하위 컴포넌트 props로 내려준다.
        //함수형 상태관리 (useState()) 배열 선언
        const [addr,setAddr]=React.useState([]);//배열초기화
        //외부데이터 가져와서 비동기방식으로 실행
        React.useEffect(()=>{
            const axiosResult=axios.get('./data/member.json')
                                    .then((Response)=>{
                                        return(setAddr([...Response.data.addr]));
                                    })
                                    .catch((Error)=>{
                                        return(console.log(`AXIOS 실패: ${Error}`))
                                    });
                                },[]);
                                console.log(addr);
        return (
            <div id="wrap">
                <h1 style={style.h1}>{props.title}</h1>
                {/* <h2 style={style.h2}>{props.title2}</h2> */}
                <AddressComponent title2={props.title2} addr={props.addr}/>
            </div>
        );
    };


    
    const AddressComponent = (props) => {
        const result=props.addr.map(function(item,index,array){
            // console.log(item)
            return(
                <tr key={index+1}>
                    <td>{index+1}</td>
                    <td>{item.이름}</td>
                    <td>{item.거주지}</td>
                    <td>{
                            item.취미.map(function(item2,index2){
                                return(
                                    <span>
                                        <a href="#" title={item2}>{item2}</a>
                                        {(item.취미.length-1)==index2?'':' , '}
                                    </span>
                                );
                            })
                        }</td>
                </tr>
            );
        });
        return (
            <div id="address">
                <h2 style={style.h2}>{props.title2}</h2>
                <table>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>이름</th>
                            <th>거주지</th>
                            <th>취미</th>
                        </tr>
                    </thead>
                    <tbody>
                        {result}
                    </tbody>
                </table>
            </div>
        );
    };
    

    const style={
        h1:{
            fontSize:'36px',
            color:'#c66',
            textAlign:'center',
            padding:'50px 0'
        },
        h2:{
            fontSize:'30px',
            color:'#66c',
            textAlign:'center',
            padding:'30px 0'
        }
    }

    MemberComponent.defaultProps={
        title:'회원관리',
        title2:'ADDRESS',
        section1(){
            return(
                console.log('메서드 리턴값')
            );
        },
        addr:[
            {이름:'조지현',거주지:'종로',취미:['잠자기','먹기']},
            {이름:'유준우',거주지:'평택',취미:['독서','영화보기']},
            {이름:'이경준',거주지:'시흥',취미:['티비보기','맛집가기']},
            {이름:'고가연',거주지:'시흥',취미:['등산','영화보기']},
            {이름:'양온유',거주지:'화성',취미:['수영','독서','등산']},
            {이름:'강승현',거주지:'오산',취미:['등산','맛집가기']},
            {이름:'주세현',거주지:'화성',취미:['잠자기','음악']}
        ]
    }

    ReactDOM.render(
        <MemberComponent/>,
        document.getElementById('root')
    );
})()

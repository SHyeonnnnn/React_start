(()=>{
    
    class AppComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                title:'주소를 JSON 데이터 AXIOS',
                arr:{
                    번호: 100,
                    이름:'조지영'
                },
                arr2:[
                    {번호: 1, 이름:'오혜성', 연락처:'010-0000-1111'},
                    {번호: 2, 이름:'윤종환', 연락처:'010-0000-2222'},
                    {번호: 3, 이름:'강원경', 연락처:'010-1111-1111'}
                ],
                회원:[],
                성적표:[],
                주소록:[]
            }
            
        }

        axiosfn = () => {
            axios.get('./data/member.json')
            .then((response) =>{
                this.setState({
                    회원: response.data.회원
                })
                console.log(response.data.회원);
                console.log(this.state.회원)

                this.setState({
                    성적표: response.data.성적표
                })
                console.log(response.data.성적표);
                console.log(this.state.성적표)

                this.state.성적표.map(function(item){
                    console.log(item);
                })
                this.setState({
                    주소록:response.data.주소록 
                })
                console.log(response.data.주소록);
                console.log(this.state.주소록)

                this.state.주소록.map(function(item){
                    console.log(item);
                })
            })
            .catch((error) =>{console.log('오류', error)});
        }

        componentDidMount(){
            this.axiosfn();
        }
        render() {
           const result=this.state.arr2.map(function(item){
                return(
                    <tr>
                        <td>{item.번호}</td>
                        <td>{item.이름}</td>
                        <td>{item.연락처}</td>
                    </tr>
                )
            }) 
            const result2=this.state.회원.map(function(item){
                return(
                    <tr>
                        <td>{item.이름}</td>
                        <td>{item.거주지}</td>
                        <td>{item.취미}</td>
                    </tr>
                )
            }) 
            return (
                <div id='app'>
                    <div>
                        {this.axiosfn}
                    </div>
                    <h1>{this.state.title}</h1>
                    <h2>{this.state.arr.번호}</h2>
                    <h2>{this.state.arr.이름}</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>이름</th>
                                <th>연락처</th>
                            </tr>
                        </thead>
                        <tbody>
                            {result}
                        </tbody>
                    </table>
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th> 이름</th>
                                    <th> 거주지</th>
                                    <th> 취미</th>
                                </tr>
                            </thead>
                            <tbody>
                                {result2}
                            </tbody>
                        </table>
                    </div>
                </div>
            );
        }
    }
    

    ReactDOM.render(
        <AppComponent />,
        document.getElementById('root')
    );
})();
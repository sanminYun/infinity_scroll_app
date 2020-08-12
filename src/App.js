import React, {useState, useEffect} from 'react';
import './App.css';
import PictureList from "./components/PictureList"
import ScrapLabel from "./components/ScrapLabel";

function App() {

    //로컬 저장소
    let myStorage = window.localStorage;

    const [page, setPage] = useState(1);
    const [datas, setDatas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [check, setCheck] = useState(false); //스크랩 필터
    const [end, setEnd] = useState(false); //마지막 페이지일 경우 true
    const [scrap, setScrap] = useState({}); //스크랩 유무 Object 데이터


    // const reqHeader = new Headers();
    // reqHeader.append("Content-Type","application/json");
    const loadDatas = () => {
        if(!page) {
            return;
        }
        if(end) {
            console.log("마지막 페이지");
            return;
        }
        setLoading(true);
        fetch(`/bucketplace-coding-test/cards/page_${page}.json`)
            .then(response => response.json())
            .then(result => {
                setLoading(false);
                setDatas(prev => [...prev, ...result]);
            })
            .catch(e => {console.log(e); setEnd(true); setLoading(false);});
    }

    const handleScroll = event => {
        let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
        let scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
        let clientHeight = document.documentElement.clientHeight;

        if(scrollTop + clientHeight === scrollHeight){
            //console.log("change page to ",page + 1);
           // if(loading){ return; }
            setPage(prev => prev + 1);
        }
    }

    //When Component did mount
    useEffect(() => {
        //myStorage.clear();
        window.addEventListener('scroll', handleScroll, true);
        loadDataFromStorage();
    }, [])


    //when page updated
    useEffect(() => {
        loadDatas();
    }, [page]);

    const loadDataFromStorage = () => {
        if(myStorage.getItem('scrap') !== null) {
            setScrap(JSON.parse(myStorage.getItem('scrap')));
        }
    }

    const saveDataToStorage = (newScrap) => {
        myStorage.setItem('scrap', JSON.stringify(newScrap));
    }

    const handleClick = () => {
        setCheck(prev => !prev);
    }

    const toggleScrap = (id) => {
       // console.log("스크랩 :",id);
        setScrap(prev => {
            if(prev[id] === undefined){
                let nextScrap = {...prev, [id]:true};
                saveDataToStorage(nextScrap);
                return nextScrap;
            }  else {
                let nextScrap = {...prev};
                nextScrap[id] = !prev[id];
                saveDataToStorage(nextScrap);
                return nextScrap;
            }
        })
    }

    return (
        <div className="App">
            {loading && <div>Loading...</div>}
            {!loading && <ScrapLabel
                check={check}
                handleClick={handleClick}
            />}

            {datas &&
                <PictureList
                    datas={datas}
                    scrap={scrap}
                    toggleScrap={toggleScrap}
                    check={check}
                />
            }
        </div>
    );
}

export default App;

"use client"
import { useState } from "react"
import { Hyou } from './tth.tsx'

export default function Home() {
    const [tenbou, setTenbou] = useState<number>(0)
    const [honba, setHonba] = useState<number>(0)
    const [oya, setOya] = useState<string>("子")
    const [rival, setRival] = useState<string>("子")
    const [ron, setRon] = useState<boolean>(true)
    const [tsumo, setTsumo] = useState<boolean>(true)

    const ipp = () => {

        const setParent = (oya: string, rival: string) =>{
            if (oya !== '') {
                if (oya === '親') setRival("子")
                setOya(oya)
            }
            else if (rival !== '') {
                if (rival === '親') setOya("子")
                setRival(rival)
            }
        }

        return (
            <>
                <div className="row">
                    <div className="col-auto">
                        <label className="p-3">自分が </label>
                        <select className="form-control" value={oya} onChange={e=>setParent(e.target.value, '')}>
                            <option value="親">親</option>
                            <option value="子">子</option>
                        </select>
                    </div>

                    <div className="col-auto">
                        <label className="p-3">相手が </label>
                        <select className="form-control" value={rival} onChange={e=>setParent('', e.target.value)}>
                            <option value="親">親</option>
                            <option value="子">子</option>
                        </select>
                    </div>

                    <div className="col-auto">
                        <label className="p-3">供託</label>
                        <input className="form-control" type="number" min="0" max="99" value={tenbou} onChange={e => setTenbou(Number(e.target.value))} />
                    </div>

                    <div className="col-auto">
                        <label className="p-3">本場 </label>
                        <input className="form-control" type="number" min="0" max="99" value={honba} onChange={e => setHonba(Number(e.target.value))} />
                    </div>

                </div>

                <div className="row">
                    <div className="col-auto">
                        <input type="checkbox" className="p-3" checked={ron} onChange={() => setRon(prevState => !prevState)} />
                        <label className="m-3">ロン</label>
                    </div>
                    <div className="col-auto">
                        <input type="checkbox" className="p-3" checked={tsumo} onChange={() => setTsumo(prevState => !prevState)} />
                        <label className="m-3">ツモ</label>
                    </div>
                </div>
            </>
        );
    };

    return (
        <div className="container">
            {ipp()}
            <Hyou tenbou={tenbou} honba={honba} oya={oya} rival={rival} ron={ron} tsumo={tsumo} />
        </div>
    );
};

"use client"
import { useState } from "react"
import { Hyou } from './tth.tsx'

export default function Home() {
    const [tenbou, setTenbou] = useState<number>(0)
    const [honba, setHonba] = useState<number>(0)
    const [oya, setOya] = useState<string>("子")

    const ipp = () => {
        return (
            <>
                <div className="row">
                    <div className="col-auto">
                        <label className="p-3">自分が </label>
                        <select className="form-control" onChange={e=>setOya(e.target.value)}>
                            <option value="親">親</option>
                            <option value="子">子</option>
                        </select>
                    </div>

                    <div className="col-auto">
                        <label className="p-3">点棒</label>
                        <input className="form-control" type="number" min="0" max="99" value={tenbou} onChange={e => setTenbou(Number(e.target.value))} />
                    </div>

                    <div className="col-auto">
                        <label className="p-3">本場 </label>
                        <input className="form-control" type="number" min="0" max="99" value={honba} onChange={e => setHonba(Number(e.target.value))} />
                    </div>

                </div>

                <div className="row">
                    <div className="col-auto">
                        <input type="checkbox" className="p-3" />
                        <label className="m-3">ロン</label>
                    </div>
                    <div className="col-auto">
                        <input type="checkbox" className="p-3" />
                        <label className="m-3">ツモ</label>
                    </div>
                </div>
            </>
        );
    };

    const hheader = [
        "点差(子)", "点差(親)", "和了点数", "確率"
    ]


    return (
        <div className="container">
            {ipp()}
            <h4>mmp</h4>
            <Hyou tenbou={tenbou} honba={honba} oya={oya} />
        </div>
    );
};

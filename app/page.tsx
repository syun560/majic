"use client"
import { useState } from "react"
import { Hyou } from './tth.tsx'
import { Ala } from './alealert.tsx'

export default function Home() {
    const [tenbou, setTenbou] = useState<number>(0)
    const [honba, setHonba] = useState<number>(0)
    const [oya, setOya] = useState<string>("子")
    const [rival, setRival] = useState<string>("子")
    const [ron, setRon] = useState<boolean>(true)
    const [ron_direct, setRonDirect] = useState<boolean>(true)
    const [tsumo, setTsumo] = useState<boolean>(true)

    const ipp = () => {

        const setParent = (oya: string, rival: string) => {
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
                <Ala />
                <div className="row">
                    <div className="col-auto border border-top-0 border-dark rounded">
                        <div className="row mb-2">
                            <div className="col-auto">
                                <label className="col-form-label">自分が </label>
                            </div>
                            <div className="col-auto">
                                <select className="form-select" value={oya} onChange={e => setParent(e.target.value, '')}>
                                    <option value="親">親</option>
                                    <option value="子">子</option>
                                </select>
                            </div>
                            <div className="col-auto">
                                <label className="col-form-label">相手が </label>
                            </div>
                            <div className="col-auto">
                                <select className="form-select" value={rival} onChange={e => setParent('', e.target.value)}>
                                    <option value="親">親</option>
                                    <option value="子">子</option>
                                </select>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-auto">
                                <label className="col-form-label">供託</label>
                            </div>
                            <div className="col-auto">
                                <input className="form-control" type="number" min="0" max="99" value={tenbou} onChange={e => setTenbou(Number(e.target.value))} />
                            </div>
                            <div className="col-auto">
                                <label className="col-form-label">本場 </label>
                            </div>
                            <div className="col-auto">
                                <input className="form-control" type="number" min="0" max="99" value={honba} onChange={e => setHonba(Number(e.target.value))} />
                            </div>
                        </div>
                    </div>
                    <div className="col-auto border border-dark border-top-0 rounded">
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" checked={tsumo} onChange={() => setTsumo(prevState => !prevState)} />
                            <label className="form-check-label">ツモ</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" checked={ron_direct} onChange={() => setRonDirect(prevState => !prevState)} />
                            <label className="form-check-label">ロン(直撃)</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" checked={ron} onChange={() => setRon(prevState => !prevState)} />
                            <label className="form-check-label">ロン</label>
                        </div>
                    </div>
                </div>
            </>
        );
    };

    return (
        <div className="container">
            {ipp()}
            <Hyou tenbou={tenbou} honba={honba} oya={oya} rival={rival} ron={ron} ron_direct={ron_direct} tsumo={tsumo} />
        </div>
    );
};

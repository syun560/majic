import { points } from './points.ts'

type Props = {
    tenbou :number
    honba :number
    oya: string
    rival: string
    tsumo: boolean
    ron: boolean
}

type HData = {
    method: string
    tensa : number
    aka: string
    rate: number
    ex1: string
    ex2: string
    ex3: string
}

export const Hyou : React.FC<Props> = ({tenbou, honba, oya, rival, tsumo, ron}: Props) => {
    const hheader = [
        '和了方法', '相手とつく点差', '和了点数', '確率', '平和ツモ(20符)', '七対子(30符)', '40符'
    ]

    // スタイル
    const st = (rate :number) => {
        return {
            backgroundColor: 'aliceblue',
        }
    }

    let hdata: HData[]

    // 親の場合
    if (oya === '親') {
        hdata = points.map(p => {
            let tensa = p.parent_tsumo * 4 + tenbou * 1000 + honba * 400
            
            return {
                method: 'ツモ',
                tensa: tensa,
                aka: `${p.aka}(${p.parent_tsumo}オール)`,
                rate: p.rate * 100,
                ex1: p.ex1,
                ex2: p.ex2,
                ex3: p.ex3,
            }
        })
    }
    // 子の場合
    else{
        hdata = points.map(p => {
            let tensa = 0
            if (rival='子'){
                tensa = p.child_tsumo_from_child * 3 + p.child_tsumo_from_parent + tenbou * 1000 + honba * 400   
            }
            else{
                tensa = p.child_tsumo_from_child * 2 + p.child_tsumo_from_parent * 2 + tenbou * 1000 + honba * 400
            }
                  
            return {
                method: 'ツモ',
                tensa: tensa,
                aka: `${p.aka}(${p.child_tsumo_from_child}-${p.child_tsumo_from_parent})`,
                rate: p.rate * 100,
                ex1: p.ex1,
                ex2: p.ex2,
                ex3: p.ex3,
            }
        })
    }

    // 絞り込みによって取得する情報を変化させる

    

    return (
        <table className="table table-sm mt-3 table-bordered">
            <thead className="thead-light">
                <tr>
                    {hheader.map((h, i) => <th key={i}>{h}</th>)}
                </tr>
            </thead>
            <tbody>
                {hdata.map((h, i) => {
                    return (
                        <tr key={i}>
                            <td>{h.method}</td>
                            <td className="text-danger">{h.tensa}</td>
                            <td>{h.aka}</td>
                            <td style={st(h.rate)}>{h.rate} %</td>
                            <td>{h.ex1}</td>
                            <td>{h.ex2}</td>
                            <td>{h.ex3}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    )
};
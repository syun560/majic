import { points } from './points.ts'

type Props = {
    tenbou :number
    honba :number
    oya: string
}

type HData = {
    tensa_child : number
    tensa_parent : number
    aka: string
    rate: number
}

export const Hyou : React.FC<Props> = ({tenbou, honba, oya}: Props) => {
    const hheader = [
        "点差(子)", "点差(親)", "和了点数", "確率", "平和ツモ(20符)", "七対子(30符)", "40符"
    ]

    let hdata: HData[]

    // 親の場合
    if (oya === '親') {
        console.log('おや！！！')
    }

    
    hdata = points.map(p => {
        let tensa_child = p.child_tsumo_from_child * 3 + p.child_tsumo_from_parent + tenbou * 1000 + honba * 400
        let tensa_parent = p.child_tsumo_from_child * 2 + p.child_tsumo_from_parent * 2 + tenbou * 1000 + honba * 400
        
        return {
            tensa_child: tensa_child,
            tensa_parent: tensa_parent,
            aka: `${p.aka}(${p.child_tsumo_from_child}-${p.child_tsumo_from_parent})`,
            rate: p.rate * 100
        }
    })

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
                            <td className="text-danger">{h.tensa_child}</td>
                            <td>{h.tensa_parent}</td>
                            <td>{h.aka}</td>
                            <td>{h.rate} %</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    )
};
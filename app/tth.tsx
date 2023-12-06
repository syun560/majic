import { points } from './points.ts'

type Props = {
    tenbou :number
    honba :number
    oya: string
    rival: string
    tsumo: boolean
    ron: boolean
    ron_direct: boolean
}

type HData = {
    method: string
    tensa : number
    aka: string
    rate: number
    ex1: string
    ex2: string
    ex3: string
    ex4: string
}

// 入力された条件から点数表を生成する
export const Hyou : React.FC<Props> = ({tenbou, honba, oya, rival, tsumo, ron, ron_direct}: Props) => {
    const hheader = [
        '和了方法',
        '相手とつく点差',
        '和了点数',
        '確率',
        '門前ツモ,平和ロン, 鳴き(30符)',
        '平和ツモ(20符)',
        '門前ロン、テンパネ(40符)',
        '七対子(25符)'
    ]
    const hheader2 = [
        '和了方法',
        '相手とつく点差',
        '和了点数',
        '確率',
        '門前ツモ, 鳴き(30符)',
        '平和ツモ(20符)',
        'テンパネ(40符)',
        '七対子(25符)'
    ]

    // スタイル
    const st_rate = (rate :number) => {
        return {
            backgroundColor: 'aliceblue',
        }
    }
    const st_method = (method :string) => {
        if (method === 'ロン'){
            return {
                backgroundColor: 'aliceblue',
            }
        }
        else if (method === 'ロン(直撃)'){
            return {
                backgroundColor: 'tomato' 
            }
        }
        else if (method === 'ツモ'){
            return {
                backgroundColor: 'khaki' 
            }
        }
    }
    // スタイル（翻数によってhsl指定による色分けを行う。）
    const st_agari = (agari :string) => {
        const hon = Number(agari[0])
        return {
            backgroundColor: `hsl(${hon * 30}, 70%, 80%)`
        }
    }


    let hdata: HData[] = []
    // ロンの場合の点数表

    if (ron_direct) {
        hdata.push(...points.map(p => {
            let tensa = 0
            if (oya === '親') {
                tensa = p.parent_ron * 2 + tenbou * 1000 + honba * 600
            }
            else{
                tensa = p.child_ron * 2 + tenbou * 1000 + honba * 600
            }
            
            return {
                method: 'ロン(直撃)',
                tensa: tensa,
                aka: oya === '親' ? `${p.parent_ron}` : `${p.child_ron}`,
                rate: p.rate * 100,
                ex1: p.ex1,
                ex2: p.ex2,
                ex3: p.ex3,
                ex4: p.ex4
            }
        }))
    }
    if (ron) {
        hdata.push(...points.map(p => {
            let tensa = 0
            if (oya === '親') {
                tensa = p.parent_ron + tenbou * 1000 + honba * 600
            }
            else{
                tensa = p.child_ron + tenbou * 1000 + honba * 600
            }
            
            return {
                method: 'ロン',
                tensa: tensa,
                aka: oya === '親' ? `${p.parent_ron}` : `${p.child_ron}`,
                rate: p.rate * 100,
                ex1: p.ex1,
                ex2: p.ex2,
                ex3: p.ex3,
                ex4: p.ex4
            }
        }))
    }
    if (tsumo) {
        // ツモの場合の点数表
        hdata.push(...points.map(p => {
            let tensa = 0
            let aka = ''
            if (oya === '親') {
                tensa = p.parent_tsumo * 4 + tenbou * 1000 + honba * 400
                aka = `${p.parent_tsumo * 3}（${p.parent_tsumo}オール）`
            }
            else{
                if (rival==='子'){
                    tensa = p.child_tsumo_from_child * 3 + p.child_tsumo_from_parent + tenbou * 1000 + honba * 400
                }
                else{
                    tensa = p.child_tsumo_from_child * 2 + p.child_tsumo_from_parent * 2 + tenbou * 1000 + honba * 400
                }
                aka = `${p.child_tsumo_from_child * 2 + p.child_tsumo_from_parent + honba * 300 + tenbou * 1000}（${p.child_tsumo_from_child + honba * 100}-${p.child_tsumo_from_parent + honba * 100}）`
            }
            
            return {
                method: 'ツモ',
                tensa: tensa,
                aka: aka,
                rate: p.rate * 100,
                ex1: p.ex1,
                ex2: p.ex2,
                ex3: p.ex3,
                ex4: p.ex4
            }
        }))
    }

    // 点数順にソートを行う
    hdata.sort((a, b) => {
        if( a.tensa < b.tensa ) return -1;
        if( a.tensa > b.tensa ) return 1;
        return 0;
    })

    // 絞り込みによって取得する情報を変化させる
    
    return <>
    { hdata.length > 0 ?
    <div className="table-responsive">
        <table className="table table-sm mt-3 text-center">
            <thead>
                <tr className="table-secondary">
                    {hheader.map((h, i) => <th key={i}>{h}</th>)}
                </tr>
            </thead>
            <tbody>
                {hdata.map((h, i) => {
                    return (
                        <tr key={h.tensa + i}>
                            <td style={st_method(h.method)}>{h.method}</td>
                            <td className="text-danger">{h.tensa}</td>
                            <td>{h.aka}</td>
                            <td style={st_rate(h.rate)}>{h.rate} %</td>
                            <td style={st_agari(h.ex2)} className={h.ex2 === "" ? "table-secondary" : ""}>{h.ex2}</td>
                            <td style={st_agari(h.ex1)} className={h.ex1 === "" ? "table-secondary" : ""}>{h.ex1}</td>
                            <td style={st_agari(h.ex3)} className={h.ex3 === "" ? "table-secondary" : ""}>{h.ex3}</td>
                            <td style={st_agari(h.ex4)} className={h.ex4 === "" ? "table-secondary" : ""}>{h.ex4}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </div>
    : <p>データが無いにゃ…（絞り込みを選択してにゃ）</p>}
    </>
}
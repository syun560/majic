"use client"
import { useState } from "react"
import { points } from './points.ts'


export default function Home() {
  const [tenbou, setTenbou] = useState(0)
  const [honba, setHonba] = useState(0)


  const ipp = () => {
    return (
      <>
      <div className="row">
        <div className="col-auto">  
          <label className="p-3">自分が </label>
          <select className="form-control">
            <option>親</option>
            <option>子</option>
          </select>
        </div>
        
        <div className="col-auto">  
          <label className="p-3">点棒</label>
          <input className="form-control" type="number" min="0" max="99" value={tenbou} onChange={e=>setTenbou(Number(e.target.value))} />
        </div>

        <div className="col-auto">  
          <label className="p-3">本場 </label>
          <input className="form-control" type="number" min="0" max="99" value={honba} onChange={e=>setHonba(Number(e.target.value))} />
        </div>

      </div>
      
      <div className="row">
        <div className="col-auto">
          <input type="checkbox" className="p-3"/>
          <label className="m-3">ロン</label>
        </div>
        <div className="col-auto">
          <input type="checkbox" className="p-3"/>
          <label className="m-3">ツモ</label>
        </div>
      </div>
      </>
    );
  };
  
  const hheader = [
    "点差(子)", "点差(親)", "和了点数", "確率"
  ]


  // 表
  const hyou = () => {
    // 取得する情報が変化する
    
    return (
      <table className="table table-sm mt-3 table-bordered">
        <thead className="thead-light">
        <tr>
        {hheader.map((h, i)=><th key={i}>{h}</th>)}
        </tr>
        </thead>
        <tbody>
        {points.map((h, i) => {
          const tensa_child = h.child * 2 + h.parent + h.child + tenbou * 1000 + honba * 400
          const tensa_parent = h.child * 2 + h.parent + h.parent + tenbou * 1000 + honba * 400
          return (
            <tr key={i}>
              <td className="text-danger">{tensa_child}</td>
              <td>{tensa_parent}  </td>
              <td>{h.aka}({h.child}-{h.parent})</td>
              <td>{h.rate * 100} %</td>
            </tr>
          );
        })}
        </tbody>
      </table>
    );
  };

  return (
    <div className="container">
      {ipp()}
      <h4>mmp</h4>
      {hyou()}
    </div>
  );
};

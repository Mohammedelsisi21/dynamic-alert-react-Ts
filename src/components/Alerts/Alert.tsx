import { CircleX, X } from 'lucide-react';

import './Alert.scss'
import type { ReactNode } from 'react';


interface IAlert {
  type: TAlert,
  icon: ReactNode,
  title: string,
  description: string,
}

type TAlert = "alert-default" | "alert-info" | "alert-error" | "alert-warning" | "alert-success";

export default function Alert({type, icon, title, description} : IAlert) {
  <CircleX size={20}/>
  return (<>
      <div className='container'>
        <div className={type}>
          <div className="alert-header">
            <div>
              <span>{icon}</span>
              <p className='title'>{title}</p>
            </div>
            <X size={20}/>
          </div>
          <div className="description">{description}</div>
        </div>
      </div>
  </>)
}

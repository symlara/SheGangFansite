import 'tachyons';
import data from '../../data';

export default function Samples () {
    return (
        <div className='sample'>
            
            { 
              data && data.map((data, index) => {
                return (
                    <div key={ data }>

                      { data.readable ? (
                         
                        <a className="lh-copy fl tc" href={ data.preview }>{ data.title }</a>
                          

                      ) : null }

                    </div>
                );
              })
            }
        </div>
    );
}
import React from 'react'
import PropTypes from 'prop-types'

function Pagination(props) {
    const getNumbers=()=>{
        let numbers = [];
        let itemsPerPage = props.itemsPerPage
        let pageNumber= 1
 
        for(let i=0; i< props.count; i += itemsPerPage){
                const page = pageNumber;
                let style ="pagination-number";
                let content = null;

                if(props.active===page){
                    style= "pagination-number pagination-number-active";
                    content= (
                        <div key={i} className={style}>
                            {pageNumber}
                        </div>
                    );
                }
                else {
                    style= "pagination-number";
                    content= (
                        <div key={i} onClick={()=> props.visitPage(page)} className={style}>
                            {pageNumber}
                        </div>
                    );    
                }
                numbers.push(
                    content
                );
                pageNumber ++;
        }
        return numbers;
    };

    return (
        <div className= "pagination">
            <div onClick={()=>props.previous()} className="pagination-number">
            «
            </div>
            {getNumbers()}
            <div onClick={()=>props.next()} className="pagination-number">
            »
            </div>
        </div>
    )

}
    Pagination.propTypes = {
        itemsPerPage: PropTypes.number.isRequired,
        count: PropTypes.number.isRequired,
        next: PropTypes.func.isRequired,
        active: PropTypes.number.isRequired,
        previous: PropTypes.func.isRequired,
        visitPage: PropTypes.func.isRequired,
        

    };
export default Pagination
    
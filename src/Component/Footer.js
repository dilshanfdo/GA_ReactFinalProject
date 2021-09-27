import { Link } from 'react-router-dom';

const alphabetArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function Footer () {

    function getRouteString( letter ) {
        return `/cocktail/searchByFirstLetter/${ letter }`;
    }

    return (
        <div className="footer">
            {
                alphabetArray.map( ( letter, index ) => (
                    alphabetArray.length - 1 === index
                        ?
                        <div className='test' key={ letter }>
                            <Link to={ () => getRouteString( letter ) }>{letter}</Link>
                        </div>
                        :
                        <div className='test' key={letter}>
                            <Link to={ () => getRouteString( letter ) }>{letter}</Link>
                            &nbsp; | &nbsp;
                        </div>
                ))
            }
        </div>
    )
}

export default Footer;
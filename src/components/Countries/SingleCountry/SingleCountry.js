import './SingleCountry.scss';

const SingleCountry = ({ country }) => {
    return (
        <div className="country-name">
            <h4>{ country.name }</h4>
        </div>
    );
};

export default SingleCountry;
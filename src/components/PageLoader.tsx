import './css/_loader.css';

const PageLoader = () => {
    return (
        <div className='wrapper'>
            <button>Loading ...
                <svg>
                    <rect x="1" y="1"></rect>
                </svg>
            </button>
        </div>
    );
}

export default PageLoader;
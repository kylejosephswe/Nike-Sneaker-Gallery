import { SNEAKERS } from './SneakerCollection'
import Sneaker from './Sneaker'

const Sneakers = () => {
    return (
        <div className="sneaker-grid">
            {SNEAKERS.map((sneaker) => (
                <Sneaker data={sneaker} />
            ))}
        </div>
    )
}

export default Sneakers
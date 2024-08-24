import Image from "next/image";
// import { PropertyType } from "./PropertyList";
import { useRouter } from "next/navigation";
// import FavoriteButton from "../FavoriteButton";



const PropertyListItem= (
) => {

    return (
        <div 
            className="cursor-pointer"
            // onClick={() => router.push(`/properties/${property.id}`)}
        >
            <div className="relative overflow-hidden aspect-square rounded-xl">
                <Image
                    fill
                    src="/beach_1.jpg"
                    sizes="(max-width: 768px) 768px, (max-width: 1200px): 768px, 768px"
                    className="hover:scale-110 object-cover transition h-full w-full"
                    alt="Beach house"
                />

                {/* {markFavorite && (
                    <FavoriteButton
                        id={property.id}
                        is_favorite={property.is_favorite}
                        markFavorite={(is_favorite) => markFavorite(is_favorite)}
                    />
                )} */}
            </div>

            <div className="mt-2">
                <p className="text-lg font-bold">gfs</p>
            </div>

            <div className="mt-2">
                <p className="text-sm text-gray-500"><strong>563</strong> per night</p>
            </div>
        </div>
    )
}

export default PropertyListItem;
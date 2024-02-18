const SocialConnector = ({icon, platform}) => {
    return (
        <div className="bg-white w-[calc(100vw-48px)] sm:w-full h-24 rounded-lg shadow-dropShadow flex items-center gap-4 sm:gap-6 p-6">
            <span>
            <img src={icon} alt={platform} className="w-8 h-8" />
            </span>
            <div className="flex items-center justify-between grow">
              <p className="text-sm sm:text-2xl font-bold">{platform}</p>
              <button className="bg-secondary-500 whitespace-nowrap text-white py-1 px-6 h-10 sm:py-4 sm:px-16 rounded-lg hover:bg-secondary-600 sm:text-xl font-bold flex justify-center items-center w-28 sm:w-48">
                Connect
              </button>            
            </div>
          </div>
    )
}

export default SocialConnector;
import React from 'react'

const Message = () => {
  return (
    <div>
      <div className="p-6 mt-24 dark:bg-gray-900 boxShadow dark:text-gray-100 md:mt-10">
	<div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
		<img src="https://source.unsplash.com/75x75/?portrait" alt="" className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700" />
		<div className="flex flex-col">
			<h4 className="text-lg font-semibold text-center md:text-left">Leroy Jenkins</h4>
			<p className="dark:text-gray-400">Sed non nibh iaculis, posuere diam vitae, consectetur neque. Integer velit ligula, semper sed nisl in, cursus commodo elit. Pellentesque sit amet mi luctus ligula euismod lobortis ultricies et nibh.</p>
		</div>
	</div>

</div>

<div className="p-6 mt-20 dark:bg-gray-900 sidebar dark:text-gray-100">
	<div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
		<img src="https://source.unsplash.com/75x75/?person" alt="" className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700" />
		<div className="flex flex-col">
			<h4 className="text-lg font-semibold text-center md:text-left">Leroy Jenkins</h4>
			<p className="dark:text-gray-400">Sed non nibh iaculis, posuere diam vitae, consectetur neque. Integer velit ligula, semper sed nisl in, cursus commodo elit. Pellentesque sit amet mi luctus ligula euismod lobortis ultricies et nibh.</p>
		</div>
	</div>

</div>

    </div>
  )
}

export default Message
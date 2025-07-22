export const Button = ({ asChild, variant, children }) => <button className={`px-4 py-2 rounded ${variant === 'outline' ? 'border border-white' : 'bg-purple-600'} text-white`}>{children}</button>;

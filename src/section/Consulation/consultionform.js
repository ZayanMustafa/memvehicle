


export const ConsultationForm = ({ 
    fields = [], 
    contactMethods = [], 
    submitText = "REQUEST CONSULTATION" 
  }) => (
    <div className="border border-white p-8">
      <h2 className="text-3xl font-bold text-white mb-6">REQUEST CONSULTATION</h2>
      <form className="space-y-6">
        {fields.map((field) => (
          <div key={field.name}>
            <label className="block text-white mb-2">{field.label}</label>
            <input
              type={field.type}
              className="w-full bg-transparent border border-white p-4 text-white placeholder-gray-400"
              placeholder={field.placeholder}
            />
          </div>
        ))}
        
        <div>
          <label className="block text-white mb-2">Preferred Contact Method</label>
          <div className="flex flex-wrap gap-3">
            {contactMethods.map(method => (
              <label key={method} className="flex items-center">
                <input type="radio" name="contactMethod" className="mr-2" />
                <span className="text-gray-300">{method}</span>
              </label>
            ))}
          </div>
        </div>
  
        <button 
          type="submit" 
          className="w-full py-4 bg-white text-black text-xl font-bold hover:bg-black hover:text-white transition-colors"
        >
          {submitText}
        </button>
      </form>
    </div>
  );
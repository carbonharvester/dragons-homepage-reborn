
import * as React from "react"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface EditableTextProps {
  defaultValue: string
  id?: string
  label?: string
  className?: string
  multiline?: boolean
  rows?: number
  onChange?: (value: string) => void
  placeholder?: string
}

const EditableText = React.forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  EditableTextProps
>(({ 
  defaultValue, 
  id, 
  label, 
  className, 
  multiline = false,
  rows = 3,
  onChange,
  placeholder,
  ...props 
}, ref) => {
  const [value, setValue] = React.useState(defaultValue)
  const inputId = id || React.useId()
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value)
    if (onChange) {
      onChange(e.target.value)
    }
  }

  return (
    <div className={cn("space-y-2", className)}>
      {label && <Label htmlFor={inputId}>{label}</Label>}
      {multiline ? (
        <Textarea
          id={inputId}
          value={value}
          onChange={handleChange}
          rows={rows}
          placeholder={placeholder}
          className="min-h-[40px] resize-y"
          {...props as React.TextareaHTMLAttributes<HTMLTextAreaElement>}
        />
      ) : (
        <Input
          id={inputId}
          ref={ref as React.Ref<HTMLInputElement>}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          {...props as React.InputHTMLAttributes<HTMLInputElement>}
        />
      )}
    </div>
  )
})

EditableText.displayName = "EditableText"

export { EditableText }
